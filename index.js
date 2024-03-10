const MFA_LIFESPAN = 30 * 1000

const mfaCodeGenerator = () => {
  setInterval(() => {
    const code = Math.random().toString().split('.')[1].slice(0, 6)
    const expiration = new Date().getTime() + MFA_LIFESPAN
  }, interval)
}
