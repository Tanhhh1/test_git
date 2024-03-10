import React from 'react';

export default function TodoCard({ task, updatedStatus }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.created_at}</h5>
                <p className="card-text">{task.content}</p>
                <div className="d-flex gap-2">
                    {task.status_id === 1 ? <button className="btn btn-success" onClick={() => updatedStatus(task, 2)}>Hoan Thanh</button> : null}
                    {task.status_id !== 3 ? <button className="btn btn-danger" onClick={() => updatedStatus(task, 3)}>Huy</button> : null}
                    {task.status_id === 3 ? <button className="btn btn-primary" onClick={() => updatedStatus(task, 1)}>Lam Moi</button> : null}
                </div>
            </div>
        </div>
    )
}