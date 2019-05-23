import {
  FailedPayment as FailedPaymentEvent,
  Payment as PaymentEvent,
  JackpotPayment as JackpotPaymentEvent
} from "../generated/Contract/Contract"
import { FailedPayment, Payment, JackpotPayment } from "../generated/schema"

export function handleFailedPayment(event: FailedPaymentEvent): void {
  let entity = new FailedPayment(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._beneficiary = event.params._beneficiary
  entity.amount = event.params.amount
  entity.save()
}

export function handlePayment(event: PaymentEvent): void {
  let entity = new Payment(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._beneficiary = event.params._beneficiary
  entity.amount = event.params.amount
  entity.save()
}

export function handleJackpotPayment(event: JackpotPaymentEvent): void {
  let entity = new JackpotPayment(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._beneficiary = event.params._beneficiary
  entity.amount = event.params.amount
  entity.save()
}
