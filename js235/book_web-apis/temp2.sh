https GET api.themoviedb.org/3/search/movie \
  query=='Finding Nemo' \
  Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzQxNDc3NTg2YTMxMzNkMWJkZmNmODNlOTkzZmRhYSIsIm5iZiI6MTc1NTcyMjU1OC4yMzksInN1YiI6IjY4YTYzMzNlNzI1NWIxMDUwZWE4MTdhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mln10mq1Dy3CSbkmUGode_79Y5z9ReXkwy1WvMdBr_o' \
  Content-Type:'application/json;charset=utf-8' \
  accept:application/json \
  | jq '.results[] | {title, id}'