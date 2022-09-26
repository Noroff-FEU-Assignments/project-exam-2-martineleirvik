import * as S from "./FormMessages.styled";

export function FormError({ children }) {
  return <S.StyledFormError>{children}</S.StyledFormError>;
}

export function ValidationError({ children }) {
  return <S.StyledValidationError>{children}</S.StyledValidationError>;
}

export function FormSuccess({ children }) {
  return <S.StyledSucces>{children}</S.StyledSucces>;
}
