
import { directive } from "../lit-html.js"
import { configureVirtual } from "./configure-virtual.js"

export const virtual = configureVirtual({directive})

export {
  virtual as withHooks
}
