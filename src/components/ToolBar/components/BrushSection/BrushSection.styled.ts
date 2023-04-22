import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    "title title"
    "slider values"
    "colors colors"
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 1);
  margin-top: 0.5rem;
`;

export const SizeSlider = styled(Slider)`
  grid-area: slider;
  justify-self: center;
  height: 8rem;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 1);

  [class$="MuiSlider-rail css-qx5f9e-MuiSlider-rail"] {
    background: rgba(255, 255, 255, 0.6) !important;
  }

  [class$="MuiSlider-track css-ada0pd-MuiSlider-track"] {
    background: rgba(255, 255, 255, 1) !important;
  }

  [class$="MuiSlider-thumb"] {
    background: rgb(222, 170, 136, 1) !important;
    box-shadow: none !important;

    &:hover {
      box-shadow: 0 0 0 10px rgb(222, 170, 136, 0.3) !important;
    }
  }

  [class$="MuiSlider-valueLabel"] {
    left: 30px !important;
    right: auto !important;
    width: 3rem !important;

    &::before {
      right: auto !important;
      left: -3% !important;
    }
  }
`;

export const Values = styled.div`
  grid-area: values;
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;


export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 0.3rem;

  label {
    color: white;
    font-weight: 500;
  }

  span {
    color: rgb(222, 170, 136, 1);
  }
`
