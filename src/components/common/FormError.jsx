import * as S from "./FormError.styled";

export default function FormError({ children }) {
  return <S.StyledFormError>{children}</S.StyledFormError>;
}

export function ValidationError({ children }) {
  return <S.StyledValidationError>{children}</S.StyledValidationError>;
}
