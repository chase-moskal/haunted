import { html, render, TemplateResult, RenderOptions, directive } from 'lit-html';

type RenderFunction = typeof render
type DirectiveFunction = typeof directive

export function component(
    render: RenderFunction,
    renderer: (el: HTMLElement) => TemplateResult,
    BaseElement?: Function,
    options?: {
        useShadowDOM: boolean
    }
): Function;

export function useCallback(fn: Function, inputs: any[]): Function;

export function useEffect(fn: () => Function | void, inputs?: any[]): void;

export function useState(intialValue?: any): [any, Function];

export function useReducer(reducer: (state: any, action: any) => any, initialState: any): [any, Function];

export function useMemo(fn: Function, values: any[]): any;

export function withHooks(renderer: Function): Function;
export function virtual(directive: DirectiveFunction, renderer: Function): Function;

interface Context {
    Provider: Function;
    Consumer: Function;
    defaultValue: any;
}
export function createContext(defaultValue: any): Context
export function useContext(Context: Context): any

export function hook(Hook: Function): Function;
export class Hook {
    id: number;
    el: HTMLElement;
}
