import { Observable } from "rxjs";
import { Spring, SpringConfig } from "wobble";

export function spring(config: Partial<SpringConfig>): Observable<Spring> {
  let springRef = new Spring(config);

  return new Observable((subscriber) => {
    springRef.onStart((v) => {
      subscriber.next(v);
    });

    springRef.onUpdate((v) => {
      subscriber.next(v);
    });

    springRef.onStop(() => {
      subscriber.complete();
    });

    springRef.start();

    return {
      unsubscribe: () => {
        springRef.stop();
      },
    };
  });
}
