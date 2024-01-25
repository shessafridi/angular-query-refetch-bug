# Angular Query Refetch Bug

This project is a minimum reproducible example for a bug in Angular Query

## Repro Steps

1.  There are 2 links on the main page "TestA" and "TestB"
2.  Click "TestA" to load it's data, then click "TestB" to load it's data
3.  Go back to the "TestA" link
4.  You will see that the query is stuck in `isRefetching` state forever

## Why this happens

This issue happens when a disabled query is enabled and immediately refetched with the `refetch` method on the query.

The `queryFn` is called properly and the devtools show the query transitioning from refething state to fresh state but the `isRefetching` signal stays on `true`
