const Info = ({ title, content }) => {
  return (
    <div className="flex gap-2 border border-state-info py-6 px-4 w-full rounded-lg">
      <img src="/info.svg" alt="Info icon" />
      <div>
        <p className="font-bold text-black-2">{title}</p>
        <p>{content}</p>
      </div>
      <img className="ml-auto" src="/cancel.svg" alt="Cancel icon" />
    </div>
  )
}

const Success = ({ title, content }) => {
  return (
    <div className="flex gap-2 border border-state-success py-6 px-4 w-full rounded-lg">
      <img src="/success.svg" alt="Info icon" />
      <div>
        <p className="font-bold text-black-2">{title}</p>
        <p>{content}</p>
      </div>
      <img className="ml-auto" src="/cancel.svg" alt="Cancel icon" />
    </div>
  )
}

const Warning = ({ title, content }) => {
  return (
    <div className="flex gap-2 border border-state-warning py-6 px-4 w-full rounded-lg">
      <img src="/warning.svg" alt="Info icon" />
      <div>
        <p className="font-bold text-black-2">{title}</p>
        <p>{content}</p>
      </div>
      <img className="ml-auto" src="/cancel.svg" alt="Cancel icon" />
    </div>
  )
}

const Error = ({ title, content }) => {
  return (
    <div className="flex gap-2 border border-state-error py-6 px-4 w-full rounded-lg">
      <img src="/error.svg" alt="Info icon" />
      <div>
        <p className="font-bold text-black-2">{title}</p>
        <p>{content}</p>
      </div>
      <img className="ml-auto" src="/cancel.svg" alt="Cancel icon" />
    </div>
  )
}

export { Info, Success, Warning, Error }
