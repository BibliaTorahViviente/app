// utils/export.js
export async function exportChapter(book, chapter) {
  const content = await fetch(`/api/chapter/${book}/${chapter}`).then((r) =>
    r.json()
  );

  const doc = new jsPDF();
  doc.setFont("Arial");
  doc.text(content, 10, 10);
  doc.save(`${book}-${chapter}.pdf`);
}
