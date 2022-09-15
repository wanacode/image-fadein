# image-fadein

To serve locally run:

```
npx http-server
```

# Explanation

To detect if the image is loaded can be inconsistent depending on when the image loads and the javascript runs. To fix this we can check both `img.complete` and `img.load`.

This is based on code from next/image.

https://github.com/vercel/next.js/blob/80ec93d1bb20c4ccb9240c8633e19f9664029355/packages/next/client/image.tsx#L251-L252