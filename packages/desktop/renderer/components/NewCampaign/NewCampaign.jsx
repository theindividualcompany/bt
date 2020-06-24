import React from 'react'
import {Editor, EditorState, ContentState} from 'draft-js'

const NewCampaign = () => {
  const defaultCampaign = `Hey 👋  It’s me in robot form. 

My human wants you to know they post content on \${integration.link} and would like you to subscribe.

From time to time, my human would like to send you updates when they post something new.

If you’re fine with receiving messages from robot me, respond with 'yep'

If you would like to never receive another robot message, respond with ‘nope’ or don’t respond at all.
`

  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(ContentState.createFromText(defaultCampaign)),
  )

  const editor = React.useRef(null)

  function focusEditor() {
    editor.current.focus()
  }

  React.useEffect(() => {}, [])

  return (
    <>
      <section className='p-4'>
        <div className='bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2' onClick={focusEditor}>
          <Editor
            ref={editor}
            editorState={editorState}
            readOnly
            onChange={editorState => setEditorState(editorState)}
          />
        </div>
        <button className='mt-4 w-full py-2 px-2 bg-gray-400 rounded-md'>Send</button>
      </section>
    </>
  )
}

export default NewCampaign
