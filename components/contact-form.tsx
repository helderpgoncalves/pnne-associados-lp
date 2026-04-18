'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-6 rounded-lg bg-secondary p-6 text-center">
        <h3 className="font-semibold">Mensagem Enviada</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Obrigado pelo seu contacto. Responderemos brevemente.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-4 w-full sm:w-auto"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar nova mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="O seu nome"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="o.seu@email.pt"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Mensagem</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Descreva o seu caso ou questão..."
            rows={5}
            required
          />
        </Field>

        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="mr-2" />
              A enviar...
            </>
          ) : (
            'Enviar mensagem'
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
