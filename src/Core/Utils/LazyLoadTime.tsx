import { ComponentType, lazy } from 'react';

export const lazyMinLoadTime = <T extends ComponentType<T>>(
  factory: () => Promise<{ default: T }>,
  minLoadTimeMs = 2000,
) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, minLoadTimeMs)),
    ]).then(([moduleExports]) => moduleExports),
  );
