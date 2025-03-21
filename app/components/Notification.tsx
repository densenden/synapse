'use client'

import { MotionDiv } from './MotionWrapper'

interface NotificationProps {
  title: string
  time: string
  content: string
  actions: {
    label: string
    href?: string
  }[]
}

export default function Notification({ title, time, content, actions }: NotificationProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
  )
} 