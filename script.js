function updatePreview() {
  const html = document.getElementById("html-code").value;
  const css = `<style>${document.getElementById("css-code").value}</style>`;
  const js = `<script>${document.getElementById("js-code").value}<\/script>`;
  const output = html + css + js;
  const iframe = document.getElementById("live-preview");
  iframe.srcdoc = output;
}

function downloadOutput() {
  const html = document.getElementById("html-code").value;
  const css = `<style>${document.getElementById("css-code").value}</style>`;
  const js = `<script>${document.getElementById("js-code").value}<\/script>`;
  const output = html + css + js;

  const blob = new Blob([output], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "output.html";
  a.click();
}
