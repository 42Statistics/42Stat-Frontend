# FIXME: pnpm compile을 container 안에서 하면 에러가 발생합니다.
# pnpm compile을 넣기 위해서는, docker-compose로 frontend와 backend를 동시에 돌리고, backend:3000/graphql을 대상으로 코드를 실행해야 합니다.
pnpm i && pnpm run dev
