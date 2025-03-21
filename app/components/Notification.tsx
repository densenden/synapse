'use client'

import { MotionDiv } from './MotionWrapper'
import { useEffect, useRef } from 'react'

interface NotificationProps {
  title: string
  time: string
  content: string
  actions: {
    label: string
    href?: string
  }[]
  sound?: boolean
}

export default function Notification({ title, time, content, actions, sound = true }: NotificationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (sound && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Ignore autoplay restrictions
      })
    }
  }, [sound])

  return (
    <>
      <audio ref={audioRef} src="/sounds/notification.mp3" preload="auto" />
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        className="notification"
      >
        <div className="notification-header">
          <h3 className="notification-title">{title}</h3>
          <span className="notification-time">{time}</span>
        </div>
        <p className="notification-content">{content}</p>
        <div className="notification-actions">
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href || '#'}
              className="notification-action"
            >
              {action.label}
            </a>
          ))}
        </div>
      </MotionDiv>
    </>
  )
} 