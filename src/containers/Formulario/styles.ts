import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  color: #666666;

  input,
  textarea {
    margin: 16px 0;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    color: #333;
  }

  textarea {
    resize: none;
  }
`
