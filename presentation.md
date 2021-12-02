
Two types of micro-frontends
- build time
- run time

1. Build time.

Application build with all code
we use it today 

 + no implementation

 - workflow time
 - one big website
 - huge releases

 2. Run time

 + smaller releases
 + webpack module federation plugin

 - more complex implementation



Run-time micro-frontends options


 1. iframes
 2. Webpack module federation plugin
 3. Web components





Our case

1. Monorepo
2. Build one docker image with build sources from monorepo
3. Build each app separately
4. Run each app like running app
5. Module federation plugin for orchestration apps

