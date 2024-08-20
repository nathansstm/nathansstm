// DomReset.js

/**
 * A class to reset and manipulate the DOM.
 */
class DomReset {
  /**
   * Resets all styles in the document by removing all style and link elements,
   * removing inline styles from all elements, and adding Meyer's Reset CSS.
   */
  static resetStyles() {
    // Remove all <style> and <link> elements that include stylesheets
    let stylesheets = document.querySelectorAll('style, link[rel="stylesheet"]');
    stylesheets.forEach(sheet => sheet.remove());

    // Remove inline styles from all elements
    let elements = document.querySelectorAll('*');
    elements.forEach(element => element.removeAttribute('style'));

    // Add Meyer's Reset CSS dynamically
    const resetCSS = `
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `;

    const style = document.createElement('style');
    style.textContent = resetCSS;
    document.head.appendChild(style);
  }

  /**
   * Resets the entire DOM and replaces it with new content.
   * 
   * @param {string} newContent - The new HTML content to replace the current document.
   */
  static resetFullDOM(newContent) {
    // Clear the entire document
    document.open();
    // Write new doctype and HTML structure
    document.write(`<!DOCTYPE html><html><head><title>New Document</title></head><body>${newContent}</body></html>`);
    // Close the document to trigger the new content rendering
    document.close();
  }

  /**
   * Resets all styles and replaces the body content with new content.
   * 
   * @param {string} newContent - The new HTML content to replace the current body content.
   */
  static resetStylesAndContent(newContent) {
    // Remove all existing styles
    DomReset.resetStyles();
    // Clear the body content
    document.body.innerHTML = newContent;
  }
}

// Make DomReset globally available
window.DomReset = DomReset;

/*
 * Example usage:
 * 
 * // Reset the entire DOM and replace with new content
 * DomReset.resetFullDOM("<h1>Hello, World!</h1>");
 * 
 * // Reset styles and replace body content with new content
 * DomReset.resetStylesAndContent("<h1>New Content</h1>");
 */