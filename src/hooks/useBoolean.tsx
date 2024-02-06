"use client";
import { useState } from "react";

interface useBooleanProps {
  initialValue: boolean;
}

interface useBooleanReturn {
  boolean: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export const useBoolean = ({
  initialValue,
}: useBooleanProps): useBooleanReturn => {
  const [boolean, setBoolean] = useState(initialValue);

  const toggle = () => setBoolean((prev: boolean) => !prev);
  const setTrue = () => setBoolean(true);
  const setFalse = () => setBoolean(false);

  return { boolean, toggle, setTrue, setFalse };
};
