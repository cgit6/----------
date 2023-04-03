function fs(n) {
  // 0
  if (n == 0) {
    return 0;
  }
  // 1
  else if (n == 1) {
    return 1;
  }
  // n>1
  else {
    return fs(n - 1) + fs(n - 2);
  }
}

for (let i = 0; i < 15; i++) {
  console.log(fs(i));
}
