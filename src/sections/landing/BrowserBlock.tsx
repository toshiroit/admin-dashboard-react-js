// third-party
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { ChangeEvent } from 'react';

// material-ui
import { Box, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

// project import
import useConfig from 'hooks/useConfig';

// third-party
import { presetDarkPalettes, presetPalettes, PalettesProps } from '@ant-design/colors';

import { PresetColor } from 'types/config';

interface ColorProps {
  id: PresetColor;
  primary: string;
}

const dashImage = require.context('assets/images/landing', true);

// ==============================|| LANDING - BROWSER  PAGE ||============================== //

const BrowserBlockPage = () => {
  const { mode, presetColor, onChangePresetColor } = useConfig();

  const colors: PalettesProps = mode === 'dark' ? presetDarkPalettes : presetPalettes;
  const { blue } = colors;
  const colorOptions: ColorProps[] = [
    {
      id: 'default',
      primary: blue[5]
    },
    {
      id: 'theme1',
      primary: mode === 'dark' ? '#305bdd' : '#3366FF'
    },
    {
      id: 'theme2',
      primary: mode === 'dark' ? '#655ac8' : '#7265E6'
    },
    {
      id: 'theme3',
      primary: mode === 'dark' ? '#0a7d3e' : '#068e44'
    },
    {
      id: 'theme4',
      primary: mode === 'dark' ? '#5d7dcb' : '#3c64d0'
    },
    {
      id: 'theme5',
      primary: mode === 'dark' ? '#d26415' : '#f27013'
    },
    {
      id: 'theme6',
      primary: mode === 'dark' ? '#288d99' : '#2aa1af'
    },
    {
      id: 'theme7',
      primary: mode === 'dark' ? '#05934c' : '#00a854'
    },
    {
      id: 'theme8',
      primary: mode === 'dark' ? '#058478' : '#009688'
    }
  ];

  const handlePresetColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePresetColor(event.target.value as PresetColor);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: 'white',
              border: 0,
              color: '#333'
            }}
          />
        }
        itemOne={<ReactCompareSliderImage src={dashImage(`./${presetColor}-dark.jpg`).default} />}
        itemTwo={<ReactCompareSliderImage src={dashImage(`./${presetColor}-light.jpg`).default} />}
      />
      <Stack sx={{ position: 'absolute', top: 0, right: 0 }}>
        <RadioGroup
          sx={{ alignItems: 'flex-end' }}
          aria-label="payment-card"
          name="payment-card"
          value={presetColor}
          onChange={handlePresetColorChange}
        >
          {colorOptions.map((color, index) => (
            <FormControlLabel
              key={index}
              control={<Radio value={color.id} sx={{ display: 'none' }} />}
              label={<Box sx={{ width: presetColor === color.id ? 28 : 24, height: 24, bgcolor: color.primary }} />}
            />
          ))}
        </RadioGroup>
      </Stack>
    </Box>
  );
};

export default BrowserBlockPage;
