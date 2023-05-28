import React from "react";
import styled from "styled-components";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/lib/icons";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { Navigate } from "react-router-dom";

export default function HomePage(){
const HomePageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #ff5a5f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #ff5a5f;
    animation: underlineAnimation 2s linear infinite;
  }

  @keyframes underlineAnimation {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const AnimatedAirplane = styled(AirplaneTakeoff)`
  fill: #ff5a5f;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const CustomButton = styled.button`
  padding: 12px 24px;
  background-color: #ff5a5f;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0474c;
  }
`;

  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }
  else{
    return (
      <HomePageWrapper>
        <div>
          <Title>Xplore</Title>
          <ButtonContainer>
            <CustomButton as={Link} to="/users">
              Make friends
            </CustomButton>
            <CustomButton as={Link} to="/directions">
              Organize a trip
            </CustomButton>
            <CustomButton as={Link} to="/advisor">
              TravelAdvisor
            </CustomButton>
            <CustomButton as={Link} to="/packing">
              Packing
            </CustomButton>
          </ButtonContainer>
        </div>
      </HomePageWrapper>
    );
  }
}
