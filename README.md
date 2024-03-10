# Flow

Username and password are authenticated.

Loop:
* Generate MFA login code, and set the expiration date.
* Persist this code with expiration date.
  * Maybe use a cache store like Redis.
* Broadcast to: app's client and MFA app (EG: Authy)

User enters MFA code.

App checkes if the code is valad. IE: did it expire?
