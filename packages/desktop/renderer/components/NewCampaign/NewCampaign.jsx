import React, {useState} from 'react'
import {Editor, EditorState, ContentState} from 'draft-js'

const NewCampaign = props => {
  const defaultCampaign = `Hey 👋  It’s me in robot form. 

My human wants you to know they post content on {{integration.link}} and would like you to subscribe.`

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(defaultCampaign)),
  )

  const editor = React.useRef(null)

  function focusEditor() {
    editor.current.focus()
  }

  const [count, setCount] = useState(10)
  const [isDryRun, setDryRun] = useState(true)

  const prepareSend = (message, count, dryRun) => {
    props.handleSend(message, count, dryRun)
  }

  return (
    <>
      <section className='p-4'>
        <div className='bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2' onClick={focusEditor}>
          <Editor
            ref={editor}
            key='campaign-editor'
            editorState={editorState}
            onChange={editorState => setEditorState(editorState)}
          />
        </div>
        {props.enabled ? (
          <>
            <div className='flex items-center'>
              <input
                id='dry_run'
                name='dryRun'
                type='checkbox'
                checked={isDryRun}
                onChange={e => {
                  setDryRun(e.target.checked)
                }}
                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
              />
              <label htmlFor='dry_run' className='ml-2 block text-sm leading-5 text-gray-900'>
                Dry Run?
              </label>
            </div>
            <div className='mt-4 relative rounded-md shadow-sm'>
              <button
                className='w-full py-2 px-2 bg-gray-400 rounded-md'
                onClick={() => prepareSend(editorState.getCurrentContent().getPlainText(), count, isDryRun)}>
                Send
              </button>
              <div className='absolute inset-y-0 right-0 flex items-center text-gray-500 sm:text-sm sm:leading-5'>
                Top
                <select
                  aria-label='count'
                  value={count}
                  onChange={e => {
                    setCount(e.target.value)
                  }}
                  className='form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5'>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={40}>40</option>
                  <option value={50}>50</option>
                  <option value={60}>60</option>
                  <option value={70}>70</option>
                  <option value={80}>80</option>
                  <option value={90}>90</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <p>NOPE</p>
        )}
      </section>
    </>
  )
}

export default NewCampaign
