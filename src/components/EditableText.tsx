import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Edit3 } from 'lucide-react';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  multiline = false,
  className = '',
  placeholder = 'Click to edit...',
  component: Component = 'div',
  style = {}
}) => {
  const { isEditMode } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (multiline) {
        (inputRef.current as HTMLTextAreaElement).setSelectionRange(
          editValue.length,
          editValue.length
        );
      } else {
        (inputRef.current as HTMLInputElement).select();
      }
    }
  }, [isEditing, editValue.length, multiline]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    onChange(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Enter' && multiline && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const editableClasses = isEditMode
    ? 'cursor-pointer hover:bg-opacity-10 hover:bg-white rounded-md transition-colors relative group'
    : '';

  if (isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';
    return (
      <InputComponent
        ref={inputRef as any}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`
          ${className}
          bg-transparent border border-gray-500 rounded px-2 py-1 
          text-inherit font-inherit resize-none outline-none
          focus:border-white focus:ring-1 focus:ring-white
          ${multiline ? 'min-h-[100px]' : ''}
        `.trim()}
        style={{
          width: '100%',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }}
        {...(multiline && { rows: 4 })}
      />
    );
  }

  return (
    <Component
      className={`${className} ${editableClasses}`}
      style={style}
      onClick={handleClick}
    >
      {value || (isEditMode ? placeholder : '')}
      {isEditMode && (
        <Edit3 
          size={14} 
          className="inline-block ml-2 opacity-50 group-hover:opacity-100 transition-opacity" 
        />
      )}
    </Component>
  );
}; 