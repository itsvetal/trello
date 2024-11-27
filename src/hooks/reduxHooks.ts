import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../store';

export const useAppDispatch = (): RootDispatch => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
