for(var e=document.querySelector("table"),t=0;t<e.rows.length;t++){var r=e.rows[t],a=r.cells[1].innerHTML,o=r.insertCell(r.cells.length-1);"THEAD"===r.parentNode.tagName||"TFOOT"===r.parentNode.tagName?o.outerHTML="<th>".concat(a,"</th>"):o.outerHTML="<td>".concat(a,"</td>")}
//# sourceMappingURL=index.28a82fd3.js.map
