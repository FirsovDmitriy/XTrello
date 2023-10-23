import { styled } from 'styled-components'

export const Avatar = styled.span`
  --avatar-size: 24px;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  display: block;
  overflow: hidden;
`

export const AvatarPicture = styled.img`
  display: flex;
`