#### App Router

Folders in `App` dir are url segments 

Dynamic routes are inside square brackets
blod/[blog_id]

(auth) folder is ignored in url segment

#### Loading, Error

Loading.tsx , Error.tsx are default components for loading and error.

Can be created inside folder for scoped loading and error


#### Rendering

SSR is enabled by default

CSR "use client" 

Prevent Hydration with useEffect Hook


#### Cache

`{cache: "no-store"}` to prevent caching
