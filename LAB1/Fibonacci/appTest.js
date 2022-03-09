function test() {
    console.log(getFibonacci(0) == "not allowed" ? "Passed" : "Failed")
    console.log(getFibonacci(11) == "not allowed" ? "Passed" : "Failed")
    console.log(getFibonacci("sdfg") == "not allowed" ? "Passed" : "Failed")
}
  
  test();