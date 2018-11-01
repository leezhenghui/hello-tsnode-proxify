import {
  Component,
  QoS,
  InteractionStyle,
  Completion,
  Callback,
  Fault,
  Output,
  InteractionStyleType,
  InvocationContext
} from "tsnode-proxify";
import { Logger } from "./logger";

@Component()
class Hello {
  constructor() {}

  @InteractionStyle(InteractionStyleType.SYNC)
  @QoS({ interceptorType: Logger })
  greet(name: string): string {
    console.log("[greet]    ==> I am saying hello to", name);
    return "Hello, " + name;
  }
}

// =====================
//    main
// ====================

let hello: Hello = new Hello();
console.log('[result]: "' + hello.greet("World") + '"');
