import React, {useState} from 'react'
import {Editor, EditorState, ContentState} from 'draft-js'
import Handlebars from 'handlebars'

const NewCampaign = props => {
  const defaultCampaign = `Hey 👋  It’s me in robot form. 

My human wants you to know they post content on {{integration.link}} and would like you to subscribe.

From time to time, my human would like to send you updates when they post something new.

If you’re fine with receiving messages from robot me, respond with 'yep'

If you would like to never receive another robot message, respond with ‘nope’ or don’t respond at all.
`

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(defaultCampaign)),
  )

  const editor = React.useRef(null)

  function focusEditor() {
    editor.current.focus()
  }

  const [count, setCount] = useState(props.count || 100)

  const prepareSend = (message, count) => {
    // const message = editorState.getCurrentContent().getPlainText()
    // const template = Handlebars.compile(message)
    // const m = template(props.variables)

    props.handleSend(message, count)
  }

  return (
    <>
      <section className='p-4'>
        <div className='bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2' onClick={focusEditor}>
          <Editor
            ref={editor}
            key='campaign-editor'
            editorState={editorState}
            readOnly
            onChange={editorState => setEditorState(editorState)}
          />
        </div>
        {props.enabled ? (
          <>
            <button
              className='mt-4 w-full py-2 px-2 bg-gray-400 rounded-md'
              onClick={() => prepareSend(editorState.getCurrentContent().getPlainText(), count)}>
              Send
            </button>
            <section className='mb-2 py-2 px-2 bg-gray-100 border border-gray-400'>
              Using top {count} followers
            </section>
          </>
        ) : (
          <p>NOPE</p>
        )}
      </section>
    </>
  )
}

export default NewCampaign
