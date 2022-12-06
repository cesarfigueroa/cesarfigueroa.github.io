import type { Observable } from "rxjs";
import type { VNode } from "snabbdom";

export type Component<T> = (props: T) => Observable<VNode>;
