// Images live in /public/images — this keeps the path correct even with a custom Vite `base`.
export const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;
