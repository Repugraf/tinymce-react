import React from "react";
import { render } from "react-dom";
import { Editor, ITinyMCEEditor } from "./main/ts";

const Container = () => {
  const [editor, setEditor] = React.useState<ITinyMCEEditor>();

  React.useEffect(() => {
    editor?.execCommand(
      "mceInsertContent",
      false,
      "<p>This content was inserted programmatically</p>"
    );
  }, [editor]);

  return <Editor onEditorReady={ed => setEditor(ed)} />;
};

render(<Container />, document.querySelector("#root"));
