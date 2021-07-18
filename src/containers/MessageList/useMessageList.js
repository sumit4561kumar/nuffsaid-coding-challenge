import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import clone from 'lodash/clone'

import { severity } from '../../components/atoms/Snackbar/common'
import useNotification from '../../misc/hooks/useNotification'
import MessageGenerator from '../../api'
import { priority as priorityList } from '../../misc/common'
import useStyles from './style'

function useMessageList() {
  const [ messages, setMessages ] = useState([])
  const [ messageStart, setMessageStart ] = useState(true)
  const { snackBarConfig, setNotificationState, setInitialNotificationState } = useNotification()
  const classes = useStyles()
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  const handleMessage = useCallback((message) => {
    const newMessages = clone(messagesRef.current)
    newMessages.unshift(message)
    setMessages(newMessages)
    if(message.priority === priorityList.ERROR ) setNotificationState(message.message, severity.error)
  },[setNotificationState, setMessages])

  const genMessage = useMemo( () => new MessageGenerator({
    messageCallback: (message) => handleMessage(message)
  }), [handleMessage])

  useEffect( () => genMessage.start(), [genMessage])

  const handleStartStop = () => {
    if (messageStart) {
      genMessage.stop()
      setMessageStart(false)
    }
    else {
      genMessage.start()
      setMessageStart(true)
    }
  }

  const handleClearMessages = () => {
    if(messages.length > 0) setMessages([])
  }

  const handleDeleteBar = (id) => {
    let messagesClone = clone(messages)
    messagesClone = messagesClone.filter( item => item.id !== id)
    setMessages(messagesClone)
  }

  return {
    messages,
    messageStart,
    snackBarConfig,
    classes,
    handleStartStop,
    handleClearMessages,
    handleDeleteBar,
    setInitialNotificationState
  }
}

export default useMessageList