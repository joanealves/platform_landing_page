import { useState, useCallback } from 'react';

export function useHistory<T>(initialState: T) {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState<T[]>([initialState]);

  const setState = useCallback((action: T | ((prevState: T) => T)) => {
    const newState = typeof action === 'function' ? (action as (prevState: T) => T)(history[index]) : action;
    if (newState === history[index]) return;

    const newHistory = history.slice(0, index + 1);
    newHistory.push(newState);

    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  }, [history, index]);

  const undo = useCallback(() => {
    if (index > 0) setIndex(index - 1);
  }, [index]);

  const redo = useCallback(() => {
    if (index < history.length - 1) setIndex(index + 1);
  }, [history.length, index]);

  const canUndo = index > 0;
  const canRedo = index < history.length - 1;

  return {
    state: history[index],
    setState,
    undo,
    redo,
    canUndo,
    canRedo,
    history,
    index
  };
}