import React from 'react'

export default function Loading() {
  return (
    <div className="loadingDiv">
      <button class="btn-lg btn-info" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    </div>
  )
}
