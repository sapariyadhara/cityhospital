import { styled } from "styled-components";

export const IconBoxCus = styled.div`
  text-align: center;
  border: 1px solid #d5e1ed;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: #ff6337;
  }
  &:hover a {
    color: #fff;
  }
  &:hover p {
    color: #fff;
  }
  &:hover i {
    color: #ff6337;
    background: #fff;
  }
  &:hover div {
    transition: all 0.3s ease-out 0s;
    transform-style: preserve-3d;
    background: #fff;
  }
`;

export const Icon = styled.div`
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #ff6337;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
  &::before{
    position: absolute;
    content: '';
    left: -8px;
    top: -8px;
    height: 100%;
    width: 100%;
    background: #FFC8B8;
    border-radius: 5px;
    transition: all .3s ease-out 0s;
    transform: translateZ(-1px);
  }
`;

export const I = styled.i`
  color: #fff;
  font-size: 28px;
`;

export const H4 = styled.h4`
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
`;

export const A = styled.a`
  color: #2c4964;
  &:hover {
    color: #fff;
  }
`;

export const P = styled.p`
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
  &:hover {
    color: #fff;
  }
`;
