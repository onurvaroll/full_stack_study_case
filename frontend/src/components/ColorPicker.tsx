import React from 'react';
import { ColorType } from '../types';

interface ColorPickerProps {
  colors: ColorType[];
  selectedColor: ColorType;
  onColorChange: (color: ColorType) => void;
  productName: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, selectedColor, onColorChange, productName }) => {
  const colorStyles: Record<ColorType, { bg: string; border: string; label: string; hex: string }> = {
    yellow: {
      bg: 'bg-yellow-gold',
      border: 'border-yellow-gold',
      label: 'Yellow Gold',
      hex: '#E6CA97'
    },
    white: {
      bg: 'bg-white-gold',
      border: 'border-white-gold',
      label: 'White Gold',
      hex: '#D9D9D9'
    },
    rose: {
      bg: 'bg-rose-gold',
      border: 'border-rose-gold',
      label: 'Rose Gold',
      hex: '#E1AAA9'
    }
  };

  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => {
        const style = colorStyles[color];
        const isSelected = selectedColor === color;

        return (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`
              w-8 h-8 rounded-full border-2 transition-all duration-200
              ${style.bg}
              ${isSelected ? `${style.border} ring-2 ring-offset-2 ring-gray-400` : 'border-gray-300'}
              hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            `}
            aria-label={`Select ${style.label} for ${productName}`}
            title={style.label}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
