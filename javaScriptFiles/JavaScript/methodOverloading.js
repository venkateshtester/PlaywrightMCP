function displayBrowserInfo(name, version, remote) {
  if (typeof version === 'number' && typeof remote === 'boolean') {
    console.log(`Browser: ${name}, Version: ${version}, Remote: ${remote}`);
  } else if (typeof version === 'number') {
    console.log(`Browser: ${name}, Version: ${version}`);
  } else {
    console.log(`Browser: ${name}`);
  }
}
displayBrowserInfo("Chrome", 115, true); // Full info
displayBrowserInfo("Chrome", 115);       // Only name and version
displayBrowserInfo("Firefox");           // Only name

console.log("---------");

function print() { console.log("Hi"); }
function print(name) { console.log("Hi " + name); }
function print(name, age) { console.log("Hi " + name + " age " + age); }
print(); // Only the last print() definition is considered.
