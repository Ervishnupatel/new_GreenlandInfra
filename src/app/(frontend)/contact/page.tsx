import { ContactInfo } from '@/components/sections/ContactInfo'
import { Faq } from '@/components/sections/Faq'

export const metadata = { title: 'Contact — Greenland Infra' }

// CONTACT: contact details + social handles -> FAQ
export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <Faq />
    </>
  )
}
