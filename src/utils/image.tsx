export const extractbase64FromSignatureString = (signature: string) => {
  const split_data = signature.split('data:image/png;base64,');
  return split_data[1];
};
