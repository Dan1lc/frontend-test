export default function debounce(f, ms) {
  let timeout = null;

  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => f.apply(this, arguments), ms);
  };
}
