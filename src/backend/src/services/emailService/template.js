export const verifyAccount = (code, appName) => {
  return `<h1>Verify your email address</h1>
    <p>Thanks for signing up for ${appName}! We're excited to have you as an early user.</p>
    <h1>Code : ${code}</h1>`;
};

export const resetPassword = (code, appName) => {
  return `<h1>Reset password Verify your email address</h1>
    <p>Thanks for signing up for ${appName}! We're excited to have you as an early user.</p>
    <h1>Code : ${code}</h1>`;
};

export const verifyEmail = (code, appName) => {
  return `<h1>Verify your email address</h1>
  <p>Thanks for signing up for ${appName}! We're excited to have you as an early user.</p>
  <h1>Code : ${code}</h1>`;
};

export default { verifyAccount, verifyEmail, resetPassword };
