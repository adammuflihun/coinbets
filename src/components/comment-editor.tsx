"use client";

import { useRef, useCallback, useState } from "react";
import { Plus } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Toolbar icon helper                                                */
/* ------------------------------------------------------------------ */

function ToolbarIcon({ d }: { d: string }) {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Toolbar actions                                                    */
/* ------------------------------------------------------------------ */

const TOOLBAR_ACTIONS = [
  { path: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z", command: "bold", label: "Bold" },
  { path: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z", command: "italic", label: "Italic" },
  { path: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z", command: "underline", label: "Underline" },
  { path: "M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7L7.2 21h3.06l2.73-7.62c-.82-.31-1.47-.61-2.06-.97C9.2 11.27 6.85 10.14 6.85 7.08z", command: "strikethrough", label: "Strikethrough" },
  { path: "M5 4v3h5.5v12h3V7H19V4z", command: "formatBlock", arg: "h2", label: "Heading" },
  { path: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z", command: "formatBlock", arg: "blockquote", label: "Quote" },
  { path: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z", command: "createLink", label: "Link" },
  { path: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z", command: "insertUnorderedList", label: "Bullet list" },
  { path: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z", command: "insertOrderedList", label: "Numbered list" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface CommentEditorProps {
  /** Placeholder text shown when editor is empty */
  placeholder?: string;
  /** Minimum height of the editable area */
  minHeight?: number;
  /** Submit button label */
  submitLabel?: string;
  /** Called with HTML content on submit */
  onSubmit?: (html: string) => void;
}

export function CommentEditor({
  placeholder = "Write your reply...",
  minHeight = 100,
  submitLabel = "Submit Reply",
  onSubmit,
}: CommentEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      const text = editorRef.current.innerText?.trim() || "";
      setIsEmpty(text.length === 0);
    }
  }, []);

  function exec(command: string, arg?: string) {
    if (command === "createLink") {
      const url = prompt("Enter URL:");
      if (url) document.execCommand(command, false, url);
    } else if (arg) {
      document.execCommand(command, false, arg);
    } else {
      document.execCommand(command, false);
    }
    editorRef.current?.focus();
  }

  function handleSubmit() {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    const text = editorRef.current.innerText?.trim() || "";
    if (!text) return;
    onSubmit?.(html);
    editorRef.current.innerHTML = "";
    setIsEmpty(true);
  }

  const placeholderCss = `empty:before:text-[#1c1c1c]/40 empty:before:content-['${placeholder.replace(/\s/g, "_")}']`;

  return (
    <div data-name="comment-editor" className="flex flex-col gap-4 items-end">
      <div
        data-name="comment-editor-box"
        className="w-full overflow-hidden rounded-lg border border-[#f2f4f7]"
      >
        {/* Toolbar */}
        <div
          data-name="comment-editor-toolbar"
          className="flex items-center gap-0.5 border-b border-[#f2f4f7] bg-[#fcfcfd] px-4 py-2"
        >
          {TOOLBAR_ACTIONS.map((action) => (
            <button
              key={action.command + (action.arg || "")}
              type="button"
              title={action.label}
              data-name="toolbar-btn"
              onClick={() => exec(action.command, action.arg)}
              className="rounded p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              <ToolbarIcon d={action.path} />
            </button>
          ))}
        </div>

        {/* Editable area */}
        <div
          ref={editorRef}
          data-name="comment-editor-content"
          contentEditable
          role="textbox"
          aria-multiline="true"
          onInput={handleInput}
          className={`bg-white px-4 py-3 text-base leading-relaxed outline-none ${placeholderCss} [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:text-xl [&_h2]:font-bold [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6`}
          style={{ minHeight }}
          suppressContentEditableWarning
        />
      </div>

      {/* Submit */}
      <button
        data-name="comment-editor-submit"
        onClick={handleSubmit}
        disabled={isEmpty}
        className="flex items-center gap-2 rounded-md bg-[#e6b830] px-5 py-3 text-sm font-semibold text-[#1c1c1c] hover:bg-[#d4a82a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitLabel}
        <Plus className="size-4" />
      </button>
    </div>
  );
}
